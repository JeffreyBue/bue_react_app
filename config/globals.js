import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

export const enviroment = app.get('env') == 'development' ? 'development' : 'production';

export const app_root = path.resolve('./');
export const public_root = path.join(path.resolve('./'), 'public');
export const views_root = path.join(path.resolve('./'), 'views');

export const port = process.env.PORT;

export const site_domain = 'odin.com';
export const site_name = 'Odin Bue';
export const site_root = 'http://www.odin.com:'+port;

// Main Site Page Configs
export { home } from './pages/home.js';
