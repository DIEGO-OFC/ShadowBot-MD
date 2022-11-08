import cheerio from 'cheerio'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
let handler = m => m
handler.all = async function (m) {
	
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

export default handler
