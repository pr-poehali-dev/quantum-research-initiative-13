export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Твои права в цифровом мире</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждый гражданин вправе знать, кто собирает его данные, зачем и как долго. Закон на твоей стороне — нужно лишь уметь им пользоваться.
        </p>
        <ul className="mb-8 space-y-2 text-neutral-700 text-base lg:text-lg">
          <li>— Право на доступ к своим данным</li>
          <li>— Право на исправление и удаление</li>
          <li>— Право отозвать согласие в любой момент</li>
          <li>— Право на защиту от автоматических решений</li>
        </ul>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Скачать памятку прав
        </button>
      </div>
    </div>
  );
}