import React, { useEffect, useState } from "react";
import "./style.scss";
import { DropDown } from "../../../../Shared/UIKit/DropDown/ui";

// type Course = {
// 	id: string;
// 	title: string;
// 	description: string;
// 	favourite: boolean;
// 	cost: 'бесплатно' | 'платно';
// 	level: 'новичкам' | 'продвинутым' | 'специалистам';
// 	duration_months: number;
// 	format: 'самообучение' | 'с наставником';
// 	status: 'пройден' | 'в процессе' | 'новый' | 'в избранном';
// 	categories: string[];
// 	questions: [{ question: string; answer: string }]; //для вопросов по курсу внизу страницы курса
// };

export interface filterStateType {
  cost: ("бесплатно" | "платно")[];
  level: ("новичкам" | "продвинутым" | "специалистам")[];
  duration: number[];
  format: ("самообучение" | "с наставником")[];
  status: ("пройден" | "в процессе" | "новый" | "в избранном")[];
}
interface FilterProps {
  theme?: "light" | "dark";
  className?: string;
  filterState: filterStateType;
  setFilterState: (v: filterStateType) => void;
}
export const Filter = ({
  className,
  theme = "light",
  filterState,
  setFilterState,
}: FilterProps) => {
  const [Show, setShow] = useState<boolean>(false);
  const [isSmallVersion, setisSmallVersion] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setisSmallVersion(window.innerWidth <= 768 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const groupList = (
    <ul className="filter__groupList">
      <li className="filter__groupItem">
        <h3 className="filter__groupHead">Стоимость</h3>
        <ul className="filter__fieldList">
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.cost.includes("бесплатно")}
                onChange={() => {
                  if (filterState.cost.includes("бесплатно")) {
                    setFilterState({
                      ...filterState,
                      cost: filterState.cost.filter((item) => {
                        return item !== "бесплатно";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      cost: [...filterState.cost, "бесплатно"],
                    });
                  }
                }}
              />
              Бесплатно
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.cost.includes("платно")}
                onChange={() => {
                  if (filterState.cost.includes("платно")) {
                    setFilterState({
                      ...filterState,
                      cost: filterState.cost.filter((item) => {
                        return item !== "платно";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      cost: [...filterState.cost, "платно"],
                    });
                  }
                }}
              />
              Платно
            </label>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="filter__groupHead">Уровень</h3>
        <ul className="filter__fieldList">
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.level.includes("новичкам")}
                onChange={() => {
                  if (filterState.level.includes("новичкам")) {
                    setFilterState({
                      ...filterState,
                      level: filterState.level.filter((item) => {
                        return item !== "новичкам";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      level: [...filterState.level, "новичкам"],
                    });
                  }
                }}
              />
              Новичкам
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.level.includes("специалистам")}
                onChange={() => {
                  if (filterState.level.includes("специалистам")) {
                    setFilterState({
                      ...filterState,
                      level: filterState.level.filter((item) => {
                        return item !== "специалистам";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      level: [...filterState.level, "специалистам"],
                    });
                  }
                }}
              />
              Специалистам
            </label>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="filter__groupHead">Длительность</h3>
        <ul className="filter__fieldList">
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.duration.includes(2)}
                onChange={() => {
                  if (filterState.duration.includes(2)) {
                    setFilterState({
                      ...filterState,
                      duration: filterState.duration.filter((item) => {
                        return item !== 2;
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      duration: [...filterState.duration, 2],
                    });
                  }
                }}
              />
              до 2 месяцев
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.duration.includes(6)}
                onChange={() => {
                  if (filterState.duration.includes(6)) {
                    setFilterState({
                      ...filterState,
                      duration: filterState.duration.filter((item) => {
                        return item !== 6;
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      duration: [...filterState.duration, 6],
                    });
                  }
                }}
              />
              до полугода
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.duration.includes(12)}
                onChange={() => {
                  if (filterState.duration.includes(12)) {
                    setFilterState({
                      ...filterState,
                      duration: filterState.duration.filter((item) => {
                        return item !== 12;
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      duration: [...filterState.duration, 12],
                    });
                  }
                }}
              />
              до года
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.duration.includes(100)}
                onChange={() => {
                  if (filterState.duration.includes(100)) {
                    setFilterState({
                      ...filterState,
                      duration: filterState.duration.filter((item) => {
                        return item !== 100;
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      duration: [...filterState.duration, 100],
                    });
                  }
                }}
              />
              дольше года
            </label>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="filter__groupHead">Формат</h3>
        <ul className="filter__fieldList">
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.format.includes("самообучение")}
                onChange={() => {
                  if (filterState.format.includes("самообучение")) {
                    setFilterState({
                      ...filterState,
                      format: filterState.format.filter((item) => {
                        return item !== "самообучение";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      format: [...filterState.format, "самообучение"],
                    });
                  }
                }}
              />
              Самообучение
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.format.includes("с наставником")}
                onChange={() => {
                  if (filterState.format.includes("с наставником")) {
                    setFilterState({
                      ...filterState,
                      format: filterState.format.filter((item) => {
                        return item !== "с наставником";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      format: [...filterState.format, "с наставником"],
                    });
                  }
                }}
              />{" "}
              С наставником
            </label>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="filter__groupHead">Статус</h3>
        <ul className="filter__fieldList">
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.status.includes("пройден")}
                onChange={() => {
                  if (filterState.status.includes("пройден")) {
                    setFilterState({
                      ...filterState,
                      status: filterState.status.filter((item) => {
                        return item !== "пройден";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      status: [...filterState.status, "пройден"],
                    });
                  }
                }}
              />
              Пройден
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.status.includes("в процессе")}
                onChange={() => {
                  if (filterState.status.includes("в процессе")) {
                    setFilterState({
                      ...filterState,
                      status: filterState.status.filter((item) => {
                        return item !== "в процессе";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      status: [...filterState.status, "в процессе"],
                    });
                  }
                }}
              />
              В процессе
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.status.includes("новый")}
                onChange={() => {
                  if (filterState.status.includes("новый")) {
                    setFilterState({
                      ...filterState,
                      status: filterState.status.filter((item) => {
                        return item !== "новый";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      status: [...filterState.status, "новый"],
                    });
                  }
                }}
              />
              Новый
            </label>
          </li>
          <li className="filter__fieldItem">
            <label className="filter__fieldInput">
              <input
                type="checkbox"
                checked={filterState.status.includes("в избранном")}
                onChange={() => {
                  if (filterState.status.includes("в избранном")) {
                    setFilterState({
                      ...filterState,
                      status: filterState.status.filter((item) => {
                        return item !== "в избранном";
                      }),
                    });
                  } else {
                    setFilterState({
                      ...filterState,
                      status: [...filterState.status, "в избранном"],
                    });
                  }
                }}
              />
              В избранном
            </label>
          </li>
        </ul>
      </li>
    </ul>
  );

  return (
    <section
      className={
        "filter" + " filter_theme_" + theme + (className ? " " + className : "")
      }
    >
      {isSmallVersion ? (
        <DropDown
          dropdownBlockParams={{
            style: {
              position: "absolute",
            },
          }}
          isClosedWhenLosesActivity
          isOpeningWhenGetFocus
          show={Show}
          setShow={setShow}
          mainBlockSlot={
            <h2
              className={
                "filter__head filter__head_small" +
                (Show ? " filter__head_open" : "")
              }
            >
              Фильтры
            </h2>
          }
          dropdownBlockSlot={
            <div className="filter__groupList_small">{groupList}</div>
          }
        />
      ) : (
        <>
          <h2 className="filter__head">Фильтры</h2>
          {groupList}
        </>
      )}
    </section>
  );
};
