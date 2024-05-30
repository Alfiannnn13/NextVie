/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"http",
                hostname:"image.tmdb.org",
            },
            {
                protocol:"https",
                hostname:"i.postimg.cc",
            },
            {
                protocol:"https",
                hostname:"api.themoviedb.org",
            },
        ],
    },
};

export default nextConfig;
