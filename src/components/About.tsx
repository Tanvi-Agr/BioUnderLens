import { Calendar, BookOpen, Target, Users } from "lucide-react";
export const About = () => {
  return <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">Under the Lens</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the mission behind Under the Lens and meet the curious mind behind it.
          </p>
        </div>
        
        {/* My Mission Section */}
        <div id="mission" className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-start mb-16 py-0 px-[30px]">
          <div className="order-2 md:order-1 w-full md:col-span-4">
            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Nature and wildlife" className="rounded-2xl shadow-xl h-64 w-full md:h-80 object-cover" />
          </div>
          <div className="order-1 md:order-2 w-full md:col-span-8 px-0 mx-0 my-[10px] md:px-0 md:pr-[50px] md:my-[10px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Mission</h3>
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              Biology is expansive, fascinating, and full of concepts waiting to be explored. My mission is to bring biology into everyday conversations—not as a school subject, but as a way of understanding the world more deeply and asking better questions about how life works.
            </p>
            <p className="text-base text-gray-700 mb-0 leading-relaxed">
              Through short but meaningful blog posts, I'll unpack the what-why-hows of biology, challenge common assumptions, and highlight where the field is headed—with a new topic to dive into each week. Whether you're already fascinated by life sciences or just curious, I hope this becomes a space that fuels your thinking and deepens your curiosity. So join me on this journey to explore biology under the lens.
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div id="about-me" className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center px-[30px]">
          <div className="order-1 md:order-1 px-0 mx-0 my-[10px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi! I'm Tanvi Agrawal, a Grade 11 student and passionate biology enthusiast. Whether it's brain chemistry, cell behavior, or the strange quirks of life, I love asking questions and digging deeper into how living systems work, from the molecular level to entire ecosystems. <em>Under the Lens</em> is a blog driven by that curiosity—a space to explore both the big questions and the often overlooked details that make biology endlessly fascinating.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through my articles, I hope to share that wonder with you and build a community of curious minds as eager to explore the natural world as I am.
            </p>
          </div>
          <div className="order-2 md:order-2 flex justify-center px-0 mx-[50px] my-0 w-full md:w-auto">
            <img 
              src="aboutmepic.png" 
              alt="About me" 
              className="w-full max-w-sm md:max-w-full h-72 md:h-96 object-cover shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>;
};