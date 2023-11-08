import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
    const router = useRouter();

    // get the projectId from the URL and log it to the console
    console.log(router.query.projectId);

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
}