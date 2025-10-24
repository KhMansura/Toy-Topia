// const ExtraSection1 = () => (
//   <section className="my-10 bg-gradient-to-r from-pink-100 to-purple-100 py-10 rounded-2xl text-center">
//     <h2 className="text-3xl font-bold mb-4 text-purple-600">💡 Creative Corner</h2>
//     <p className="max-w-2xl mx-auto text-purple-400">
//       Every toy sparks imagination! Check out our creative kits and DIY sets to
//       help kids explore, invent, and learn through play.
//     </p>
//   </section>
// );

// export default ExtraSection1;
import diykit from "../assets/71JMMH8mDPL._AC_SL1000_.jpg";
import blockimg from '../assets/images.jpg';
import craftimg from "../assets/download (5).jpeg"

const ExtraSection1 = () => (
  <section className="my-10 bg-gradient-to-r from-pink-100 to-purple-100 py-12 rounded-2xl text-center shadow-md">
    <h2 className="text-3xl font-bold mb-4 text-purple-700">
      💡 Creative Corner
    </h2>
    <p className="max-w-2xl mx-auto text-purple-500 mb-6">
      Every toy sparks imagination! Dive into our creative kits and DIY sets
      designed to help kids explore art, crafts, and innovation through play.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
        <img src={diykit} alt="Art Kit" className="rounded-lg mb-3 mx-auto" />
        <h3 className="font-semibold text-purple-600">DIY Art Kits</h3>
        <p className="text-sm text-gray-500 mt-1">
          Encourage kids to express their creativity through fun painting and
          craft projects.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
        <img
          src={blockimg}
          alt="Building Blocks"
          className="rounded-lg mb-3 mx-auto"
        />
        <h3 className="font-semibold text-purple-600">Building Blocks</h3>
        <p className="text-sm text-gray-500 mt-1">
          Perfect for little engineers! Build, rebuild, and bring their
          imagination to life.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
        <img
          src={craftimg}
          alt="Craft Toys"
          className="rounded-lg mb-3 mx-auto"
        />
        <h3 className="font-semibold text-purple-600">Craft Toys</h3>
        <p className="text-sm text-gray-500 mt-1">
          From clay modeling to origami, develop fine motor skills while having
          fun!
        </p>
      </div>
    </div>

    <button className="btn btn-primary mt-8">Explore More Creativity</button>
  </section>
);

export default ExtraSection1;
