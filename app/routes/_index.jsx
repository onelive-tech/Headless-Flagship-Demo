import CategorySection from '~/components/CategorySection'
import FeaturedSection from '~/components/FeaturedSection'
import HeroVideo from '~/components/HeroVideo';

import Promotion from '~/components/Promotion';
import FeaturedProduct from '~/components/FeaturedProduct';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});

export default function HomePage() {
  

  return (
    <div className="bg-white">

      <HeroVideo />

      <div className="container mx-auto">
        <RecommendedProducts products={data.recommendedProducts} />
       
        {/* <FeaturedCollection collection={data.featuredCollection} /> */}
      </div>
      <Promotion />
      <FeaturedProduct />
    </div>
  );
}

      <main>
        <CategorySection />
        <FeaturedSection />
      </main>

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2 className=' py-6 text-center'>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product group relative"
                  to={`/products/${product.handle}`}
                >
                  <div className="w-full rounded-md bg-gray-200 group-hover:opacity-75">
                    <Image
                      data={product.images.nodes[0]}
                      aspectRatio="1/1"
                      sizes="(min-width: 45em) 20vw, 50vw"
                    />
                  </div>

                  <div className="mt-4 flex justify-between">
                  <h4 className="text-sm text-gray-700">{product.title}</h4>
                  <small className="text-sm font-medium text-gray-900">
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  )
}
