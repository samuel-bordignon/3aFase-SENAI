// import { useState } from "react";
// import { Switch } from "@/components/ui/switch";
// import { Slider } from "@/components/ui/slider";
// import { Button } from "@/components/ui/button";

// export default function AccessibilitySettings() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [highContrast, setHighContrast] = useState(false);
//   const [fontSize, setFontSize] = useState(16);
//   const [dyslexiaFont, setDyslexiaFont] = useState(false);
//   const [animations, setAnimations] = useState(true);

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4 dark:text-white">Configurações de Acessibilidade</h2>
      
//       {/* Aparência */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold dark:text-white">Aparência</h3>
//         <div className="flex justify-between items-center mt-2">
//           <span className="dark:text-white">Modo Escuro</span>
//           <Switch checked={darkMode} onCheckedChange={setDarkMode} />
//         </div>
//         <div className="flex justify-between items-center mt-2">
//           <span className="dark:text-white">Alto Contraste</span>
//           <Switch checked={highContrast} onCheckedChange={setHighContrast} />
//         </div>
//         <div className="mt-4">
//           <span className="dark:text-white">Tamanho da Fonte</span>
//           <Slider value={[fontSize]} onValueChange={(val) => setFontSize(val[0])} min={12} max={24} step={1} />
//           <p className="text-sm mt-1 dark:text-white">{fontSize}px</p>
//         </div>
//         <div className="flex justify-between items-center mt-2">
//           <span className="dark:text-white">Fonte para Dislexia</span>
//           <Switch checked={dyslexiaFont} onCheckedChange={setDyslexiaFont} />
//         </div>
//       </div>
      
//       {/* Interatividade */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold dark:text-white">Interatividade</h3>
//         <div className="flex justify-between items-center mt-2">
//           <span className="dark:text-white">Reduzir Animações</span>
//           <Switch checked={!animations} onCheckedChange={() => setAnimations(!animations)} />
//         </div>
//       </div>
      
//       <Button className="w-full mt-4">Salvar Configurações</Button>
//     </div>
//   );
// }
