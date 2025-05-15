import express, {Request, Response} from 'express'
import { authServisec } from '../services/auth-servisec';
import { jwtServisec } from '../application/jwt-servise';
import e from 'express';
import { link } from 'fs';
import { settings } from '../settings/setings';



export const authRouter= () => {

    const  router= express.Router()

    router.post('/register', 
        async (req: Request, res: Response) => {
            const user =await authServisec.createUser(req.body.login, req.body.email, req.body.password);
            
            if (!user) {
                res.status(400).json({ error: 'User creation failed' });
            }
            else {
                res.cookie('refreshToken', user.refreshToken, {
                    httpOnly: true,
                    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                });
                res.status(200).json({user:user.user , token: user.accessToken});
            }
    });
    
    router.get('/activate/:link',
        async (req: Request, res: Response) => {
            try {
                const result = await authServisec.checkConfirmationCode(req.params.link);
                
                if (result) {
                    
                    res.redirect(settings.CLIENT_URL);
                } else {
                    res.status(400).json({ error: 'Invalid or expired confirmation code' });
                }
            } catch (err) {
                console.error('Activation error:', err);
                res.status(500).json({ error: 'Server error during activation' });
            }
        }
    )

    router.post('/login', 
        async (req: Request, res: Response) => {
            const checkResalt =await authServisec.checkCredentials(req.body.loginOrEmail, req.body.password);
            
            if(checkResalt){
                const token = await jwtServisec.createJWT(checkResalt);
                await jwtServisec.saveRefreshToken(checkResalt._id, token.refreshToken);
                res.cookie('refreshToken', token.refreshToken, {
                    httpOnly: true,
                    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                });
                res.status(200).json({ user: checkResalt.userData.username,token:token.accessToken });
            }
            else
                res.status(401).json('{ checkResalt }');
        });
    router.post('/logout',
        async (req: Request, res: Response) => {
            
            const {refreshToken} = req.cookies;
            await jwtServisec.logout(refreshToken);
            res.clearCookie('refreshToken');
            res.status(200).json({ message: 'Logged out successfully' ,refreshToken});
        }
    );
    router.post('/refresh-token', async (req: Request, res: Response) => {
            const {refreshToken} = req.cookies;
            const newTokens = await jwtServisec.refreshToken(refreshToken);
            if (newTokens) {
                res.cookie('refreshToken', newTokens.refreshToken, {
                    httpOnly: true,
                    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                });
                res.status(200).json({ accessToken: newTokens.accessToken });
            } else {
                res.status(401).json({ error: 'Invalid refresh token' });
            }

    });
    router.post('/passwordrecover', 
        async (req: Request, res: Response) => {
            const result = await authServisec.sendPasswordRecoveryEmail(req.body.email);
            if (result) {
                res.status(200).json({ message: 'Password recovery instructions sent' });
            } else {
                res.status(400).json({ error: 'Failed to send password recovery instructions' });
            }
        }
    );


    router.post('/reset-password',
        async (req: Request, res: Response) => {
            const { recoveryCode, newPassword } = req.body;
            const result = await authServisec.resetPassword(recoveryCode, newPassword);
            if (result) {
                res.status(200).json({ message: 'Password has been reset successfully' });
            } else {
                res.status(400).json({ error: 'Invalid or expired recovery code' });
            }
        }
    );
    return router;
}