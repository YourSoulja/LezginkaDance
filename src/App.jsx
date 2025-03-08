import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import './App.css'; // Импортируем стили

// Компонент SharedLayoutAnimation
const allIngredients = [
    { label: "Энгельс" },
    { label: "Саратов" },
];

const [engels, saratov] = allIngredients;
const tabs = [engels, saratov];

function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const engelsImages = [
        "public/img/secondCardImg.jpg",
        "/path/to/engels2.jpg",
        "/path/to/engels3.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % engelsImages.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? engelsImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="pageStyle">
            <div className="containerMenu">
                <nav className="navMenu">
                    <ul className="tabsContainer">
                        {tabs.map((item) => (
                            <motion.li
                                key={item.label}
                                initial={false}
                                animate={{
                                    color: item === selectedTab ? "#344E41" : "#A3B18A",
                                    backgroundColor: item === selectedTab ? "#FBFBFB" : "#eee0",
                                }}
                                className="tab"
                                onClick={() => setSelectedTab(item)}
                            >
                                {item.label}
                                {item === selectedTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <main className="iconContainer">
                    <AnimatePresence mode="wait">
                        {selectedTab.label === "Энгельс" ? (
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="imageContainer" 
                            >
                                <img
                                    src={engelsImages[currentImageIndex]}
                                    alt={`Фото ${currentImageIndex + 1}`}
                                    className="imageStyle" 
                                />
                                <div className="address">
                                    <p>Энгельс, ул.Какая-то, этаж какой-то</p>
                                </div>
                                <div className="buttonContainer">
                                    <button onClick={handlePrev} className="buttonStyle">
                                        Назад
                                    </button>
                                    <button onClick={handleNext} className="buttonStyle">
                                        Вперед
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="soon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="soonContainer"
                            >
                                Скоро
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <SharedLayoutAnimation />
        </>
    );
}

export default App;