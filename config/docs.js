/* ------------ Beacon Document -------------- */

/**
 * @swagger
 * components:
 *   schemas:
 *     Beacon:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The beacon ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         code:
 *           type: string
 *           description: Unique beacon code.
 *           example: 4AB3D
 *         address:
 *           type: string
 *           description: The user's address.
 *           example: 221 B, Baker's Street ...
 *         geo:
 *           type: object
 *           description: stores geo coordinates of beacon
 *           properties:
 *             coordinates:
 *               type: array
 *               items:
 *                 type: integer
 *               example: [-22.3, 88.352]
 *         level:
 *           type: string
 *           description: stores level of waste in the bin.
 *           example: 70%
 *         createdAt:
 *           type: string
 *           format: date
 *           description: stores time of creation
 *           example: 2021-04-17T05:04:35.394Z
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: stores time of last update
 *           example: 2021-04-17T05:04:35.394Z
 */

/* ------------ Endpoint Definitions ----------- */

/**
 * @swagger
 * /api/beacon/add:
 *   post:
 *     description: Adds a new beacon to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *                 description: The bin's address.
 *                 example: 221 B, Baker's Street ...
 *               coordinates:
 *                 type: array
 *                 description: geo coordinates of beacon
 *                 example: [-22.4531, 88.138140]
 *     responses:
 *       200:
 *         description: Created beacon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beacon:
 *                   $ref: '#/components/schemas/Beacon'
 */

/**
 * @swagger
 * /api/beacon/:
 *   get:
 *     description: Retrieves a list of beacons added
 *     responses:
 *       200:
 *         description: A list of beacons.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beacons:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Beacon'
 */

/**
 * @swagger
 * /api/beacon/{id}:
 *   get:
 *     description: Retrieves details of a beacon.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the beacon to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The entire document of the beacon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beacon:
 *                   $ref: '#/components/schemas/Beacon'
 */


/**
 * @swagger
 * /api/beacon/{id}:
 *   post:
 *     description: Edits details of a beacon, _id passed in params and updated properties in body
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the beacon to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *                 description: The bin's address.
 *                 example: 221 B, Baker's Street ...
 *               coordinates:
 *                 type: array
 *                 description: geo coordinates of beacon
 *                 example: [-22.4531, 88.138140]
 *               level:
 *                 type: string
 *                 description: updated level of bin.
 *                 example: 40%
 *     responses:
 *       200:
 *         description: Success | no content.
 */

/**
 * @swagger
 * /api/beacon/del/{id}:
 *   get:
 *     description: Deletes the beacon with id as passed in params | ADMINS ONLY
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the beacon to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success | no content.
 */

/* ------------ Report Document -------------- */

/**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The report ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         author:
 *           type: string
 *           description: The author ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         content:
 *           type: string
 *           description: Issue description.
 *           example: Garbaged dumped outside of bin. Kindly attend and fix.
 *         picture_url:
 *           type: string
 *           description: Image URL.
 *           example: https://picture.com/img.png
 *         address:
 *           type: string
 *           description: Raing.
 *           example: 221 B, Baker Street
 *         is_resolved:
 *           type: boolean
 *           description: stores issue status
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date
 *           description: stores time of creation
 *           example: 2021-04-17T05:04:35.394Z
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: stores time of last update
 *           example: 2021-04-17T05:04:35.394Z
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The user ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Chris Evans
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: chris@evans.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           example: supersecretpassword
 *         phone:
 *           type: Number
 *           description: The user's 10 digit phone number.
 *           example: 4242424242
 *         address:
 *           type: string
 *           description: The user's address.
 *           example: 221 B, Baker's Street ...
 *         createdAt:
 *           type: string
 *           format: date
 *           description: stores time of creation
 *           example: 2021-04-17T05:04:35.394Z
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: stores time of last update
 *           example: 2021-04-17T05:04:35.394Z
 *     FullReport:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The report ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         author:
 *           $ref: '#/components/schemas/User'
 *         content:
 *           type: string
 *           description: Issue description.
 *           example: Garbaged dumped outside of bin. Kindly attend and fix.
 *         picture_url:
 *           type: string
 *           description: Image URL.
 *           example: https://picture.com/img.png
 *         address:
 *           type: string
 *           description: Raing.
 *           example: 221 B, Baker Street
 *         is_resolved:
 *           type: boolean
 *           description: stores issue status
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date
 *           description: stores time of creation
 *           example: 2021-04-17T05:04:35.394Z
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: stores time of last update
 *           example: 2021-04-17T05:04:35.394Z
 */

/* ------------ Endpoint Definitions ----------- */

/**
 * @swagger
 * /api/report/create:
 *   post:
 *     description: Creates a new report in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Issue description.
 *                 example: Garbaged dumped outside of bin. Kindly attend and fix.
 *               picture_url:
 *                 type: string
 *                 description: Image URL.
 *                 example: https://picture.com/img.png
 *               address:
 *                 type: string
 *                 description: Raing.
 *                 example: 221 B, Baker Street ...
 *     responses:
 *       200:
 *         description: Creates and returns a new report in the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 report:
 *                   $ref: '#/components/schemas/Report'
 */

/**
 * @swagger
 * /api/report/:
 *   get:
 *     description: Retrieves a list of issued reports | ONLY FOR ADMINS
 *     responses:
 *       200:
 *         description: A list of reports.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reports:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FullReport'
 */

/**
 * @swagger
 * /api/report/user/{user_id}:
 *   get:
 *     description: Retrieves reports issued by the corresponding user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reports authored by the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reports:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FullReport'
 */

/**
 * @swagger
 * /api/report/{id}:
 *   get:
 *     description: Retrieves the corresponding report document
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the report to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The entire document of the report.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 report:
 *                   $ref: '#/components/schemas/FullReport'
 */

/**
 * @swagger
 * /api/report/{id}:
 *   post:
 *     description: Marks the issue as resolved | ONLY FOR ADMINS
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the report to be resolved
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: No content.
 */

/* ------------ User Document -------------- */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The user ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Chris Evans
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: chris@evans.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           example: supersecretpassword
 *         phone:
 *           type: Number
 *           description: The user's 10 digit phone number.
 *           example: 4242424242
 *         address:
 *           type: string
 *           description: The user's address.
 *           example: 221 B, Baker's Street ...
 *         createdAt:
 *           type: string
 *           format: date
 *           description: stores time of creation
 *           example: 2021-04-17T05:04:35.394Z
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: stores time of last update
 *           example: 2021-04-17T05:04:35.394Z
 */

/* ------------ Endpoint Definitions ----------- */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     description: Adds a new user in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Chris Evans
 *               email:
 *                 type: string
 *                 example: chris@evans.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: supersecretpassword
 *               phone:
 *                 type: Number
 *                 description: The user's 10 digit phone number.
 *                 example: 4242424242
 *               address:
 *                 type: string
 *                 description: The user's address.
 *                 example: 221 B, Baker's Street ...
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */

 /**
  * @swagger
  * /api/user/login:
  *   post:
  *     description: Logs in the requesting user into the app
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               email:
  *                 type: string
  *                 example: chris@evans.com
  *               password:
  *                 type: string
  *                 description: The user's password.
  *                 example: supersecretpassword
  *     responses:
  *       200:
  *         description: A single user.
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 token:
  *                   type: string
  *                   description: signed jwt token
  *                   example: aaaaaa.bbbbbb.cccccc
  *                 user:
  *                   $ref: '#/components/schemas/User'
  */

 /**
  * @swagger
  * /api/user/:
  *   get:
  *     description: Retrieves a list of all users
  *     responses:
  *       200:
  *         description: A list of users.
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 users:
  *                   type: array
  *                   items:
  *                     $ref: '#/components/schemas/User'
  */
 
 /**
  * @swagger
  * /api/user/{id}:
  *   get:
  *     description: Retrieves the corresponding user's documents
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID of the user to be retrieved.
  *         schema:
  *           type: string
  *     responses:
  *       200:
  *         description: The entire document of the user.
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 user:
  *                   $ref: '#/components/schemas/User'
  */
 