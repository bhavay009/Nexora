const fs = require('fs');
const path = require('path');
const https = require('https');

const projects = [
    { name: 'doc-gupta', url: 'https://docgupta.vercel.app/' },
    { name: 'solace', url: 'https://solace-99aqi8fbz-priyansh-s-projects-eb60a61d.vercel.app/' },
    { name: 'room-radar', url: 'https://room-radar-wheat.vercel.app/' },
    { name: 'big-tree', url: 'https://big-tree-cafe.vercel.app/' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .on('close', resolve);
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
};

const fetchOgImage = async (project) => {
    console.log(`Fetching ${project.name}...`);
    try {
        const html = await new Promise((resolve, reject) => {
            https.get(project.url, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => resolve(data));
                res.on('error', reject);
            });
        });

        // Simple regex to find og:image
        const match = html.match(/<metaProperty="og:image" content="([^"]+)"/i) ||
            html.match(/<meta property="og:image" content="([^"]+)"/i) ||
            html.match(/<meta name="twitter:image" content="([^"]+)"/i);

        if (match && match[1]) {
            let imgUrl = match[1];
            if (imgUrl.startsWith('/')) {
                // Handle relative URLs
                const urlObj = new URL(project.url);
                imgUrl = `${urlObj.protocol}//${urlObj.host}${imgUrl}`;
            }
            console.log(`Found image for ${project.name}: ${imgUrl}`);
            const dest = path.join(__dirname, '../frontend/public/images', `${project.name}.png`);
            await downloadImage(imgUrl, dest);
            console.log(`Saved to ${dest}`);
        } else {
            console.log(`No OG image found for ${project.name}`);
        }
    } catch (err) {
        console.error(`Error fetching ${project.name}:`, err.message);
    }
};

(async () => {
    for (const project of projects) {
        await fetchOgImage(project);
    }
})();
