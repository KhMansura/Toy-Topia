import science from '../assets/images (1).jpg';
import mathimg from '../assets/images (2).jpg';
import robot from '../assets/images (3).jpg';

const ExtraSection2 = () => (
  <section className="my-10 py-12 rounded-2xl text-center bg-purple-50 shadow-md">
    <h2 className="text-3xl font-bold mb-4 text-purple-700">🧠 Learn Through Play</h2>
    <p className="max-w-2xl mx-auto text-purple-500 mb-6">
      Toys that teach! Discover our educational games, science kits, and STEM toys
      that make learning exciting, interactive, and fun.
    </p>

    <div className="grid sm:grid-cols-3 gap-6 px-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col h-full">
        <img
          src={science}
          alt="Science Kit"
          className="rounded-lg mb-3 mx-auto h-40 object-cover"
        />
        <h3 className="font-semibold text-purple-600">Science Kits</h3>
        <p className="text-sm text-gray-500 mt-1 flex-grow">
          Hands-on experiments that spark curiosity about chemistry and physics.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col h-full">
        <img
          src={mathimg}
          alt="Math Game"
          className="rounded-lg mb-3 mx-auto h-40 object-cover"
        />
        <h3 className="font-semibold text-purple-600">Math Games</h3>
        <p className="text-sm text-gray-500 mt-1 flex-grow">
          Make problem-solving exciting with puzzles and logic challenges.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col h-full">
        <img
          src={robot}
          alt="Robotics"
          className="rounded-lg mb-3 mx-auto h-40 object-cover"
        />
        <h3 className="font-semibold text-purple-600">Robotics</h3>
        <p className="text-sm text-gray-500 mt-1 flex-grow">
          Introduce kids to coding and robotics in a playful and easy way.
        </p>
      </div>
    </div>

    <button className="btn btn-secondary mt-8">Discover Educational Toys</button>
  </section>
);

export default ExtraSection2;

