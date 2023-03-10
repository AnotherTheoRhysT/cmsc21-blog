import Layout from '../components/Layout';
import { getAllPostMetaData } from '@/lib/posts';
import PostCard from '@/components/PostCard';


interface PostMetaDataInterface {
	id: number;
	title: string;
	date: string;
	image: string;
}

interface PropsInterface {
	posts: PostMetaDataInterface[];
}


export async function getStaticProps() {
	const posts = await getAllPostMetaData();
	posts.sort((a, b) => {
		console.log('post', a, b);
		let fa = a.date.toLowerCase(),
		fb = b.date.toLowerCase();

    if (fa < fb) {
        return 1;
    }
    if (fa > fb) {
        return -1;
    }
    return 0;
	});

	return {
		props: {
			posts
		}
	}
}


export default function Home(props: PropsInterface) {
	const { posts } = props;
	return (
		<Layout>
			<div style={{
				display: 'flex',
			}}>
			{ posts.map((post: PostMetaDataInterface) => (
				<PostCard post={post} key={post.id}/>
			)) }
			</div>
		</Layout>
	)
}