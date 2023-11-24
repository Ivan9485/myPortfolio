const Contact = () => {
  return (
    <div name='contact' className="bg-gradient-to-b from-slate-700 to-sky-900 w-full h-full  flex justify-center items-center px-4 pt-24">
      <form method="POST" className="flex flex-col max-w-[600px] w-full" action="https://getform.io/f/2aa01697-fb58-4d1e-9309-cb2069325785">
        <div className="pb-8">
          <p className="text-4xl font-bold inline borber-b-4  border-special text-textdef">Contact</p>
          <p className="text-textdef py-4 flex">Send me a message! or <p className="text-emerald-500 px-2 hover:text-emerald-400"><a target="_blank" rel="noopener noreferrer" href="https://wa.me/528688182504/?text=Quiero%20más%20información%20sobre%20catálogo:%20">Whatsapp me!</a></p> </p>
        </div>
        <input className="bg-white p-2 rounded-sm" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-white rounded-sm
        " type="email" placeholder="Email" name="email" />
        <textarea className="bg-white p-2 rounded-sm" name="message"rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-special hover:border-special  px-4 py-3 my-8 mx-auto flex items-center">Lets Collaborate</button>
      </form>
    </div>
  )
}
export default Contact