import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Understanding ReactJS with Tailwind CSS 🚀
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        Day 1: Learning Components and JSX
      </p>
      <Greeting />

      <p className="text-gray-700 text-lg mt-10 mb-4">
        Day 2: Creating a Profile Card Component
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <ProfileCard
          name="Jane Doe"
          role="Software Engineer"
          bio="Passionate developer with a love for creating intuitive user experiences."
          imageUrl="https://via.placeholder.com/400x300.png?text=Jane+Doe"
        />
        <ProfileCard
          name="Peter Smith"
          role="Product Manager"
          bio="Adept at driving product vision and strategy."
          imageUrl="https://via.placeholder.com/400x300.png?text=Peter+Smith"
        />
        <ProfileCard
          name="Alice Johnson"
          role="UX Designer"
          bio="Creative thinker focused on delivering user-centered design solutions."
          imageUrl="https://via.placeholder.com/400x300.png?text=Alice+Johnson"
        />
      </div>
    </div>
  );
}

export default App;
