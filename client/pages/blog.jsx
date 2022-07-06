import Head from "next/head";
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>

            <Link href='/'>
                <a>Back</a>
            </Link>
        </>
    )
}