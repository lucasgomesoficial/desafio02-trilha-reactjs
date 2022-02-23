import { Button } from "./Button";

type GenresNames =
  | "action"
  | "comedy"
  | "documentary"
  | "drama"
  | "horror"
  | "family"

type SideBarProps = {
  genres: {
    id: number;
    name: GenresNames;
    title: string;
  }[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
};

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
