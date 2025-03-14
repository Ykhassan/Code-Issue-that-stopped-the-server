import UserRoutes from './UserRoutes.js';
import ConnectionRoutes from './ConnectionRoutes.js';
import SearchRoutes from './SearchRoutes.js';
import ProjectRoutes from './ProjectRoutes.js';
import FileRoutes from './FileRoutes.js';
import DeploymentRoutes from './DeploymentRoutes.js';
import IssueRoutes from './IssueRoutes.js';
import CommentRoutes from './CommentRoutes.js';
import AWSRoutes from './AWSRoutes.js'
import GCPRoutes from './GCPRoutes.js'
import AzureRoutes from './AzureRoutes.js';


/**
 * @swagger
 * tags:
 *   - name: Health
 *     description: Health check endpoint
 *   - name: Users
 *     description: Endpoints related to users
 */


const apiRoutes = (router) => {
    /**
     * @swagger
     * /health:
     *   get:
     *     summary: Health check endpoint
     *     tags: [Health]
     *     responses:
     *       200:
     *         description: Returns the health status of the API
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                   type: string
     *                   example: Healthy
     */
    router.get('/health', (req, res) => {
        res.status(200).json({ status: 'Healthy' });
    });
    router.use('/users', UserRoutes)
    router.use('/connections', ConnectionRoutes)
    router.use('/search', SearchRoutes)
    router.use('/projects', ProjectRoutes)
    router.use('/files', FileRoutes)
    router.use('/deployments', DeploymentRoutes)
    router.use('/issues', IssueRoutes)
    router.use('/comments', CommentRoutes)
    router.use('/aws', AWSRoutes)
    router.use('/GCP', GCPRoutes)   
    router.use('/azure', AzureRoutes)

    // Middleware to catch 404 errors
    router.use((req, res, next) => {
        console.log(`404 Not Found: ${req.url}`);
        res.status(404).json({ error: 'Not Found' });
    });



}

export default apiRoutes
