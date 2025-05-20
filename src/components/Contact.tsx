
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding py-32">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-teal mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">Get In Touch</h2>
        <p className="text-slate text-lg mb-10 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-8 py-6 rounded text-lg">
          Say Hello
        </Button>
      </div>
    </section>
  );
};

export default Contact;
