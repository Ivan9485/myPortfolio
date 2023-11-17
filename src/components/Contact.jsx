const Contact = () => {
  return (
    <div name='contact' className="bg-secondary w-full h-screen flex justify-center items-center p-4">
      <form className="flex flex-col max-w-[600px] w-full" action="">
        <div className="pb-8">
          <p className="text-4xl font-bold inline borber-b-4  border-special text-textdef">Contact</p>
          <p className="text-textdef py-4">Envíame un mensaje!</p>
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