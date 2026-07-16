import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  ButtonGroup,
  Checkbox, 
  Rating,
} from "@mui/material";
import { FaDeleteLeft } from "react-icons/fa6";
import { Favorite, FavoriteBorder, HomeMini } from "@mui/icons-material";
function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-blue-300 rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
                alt="Office"
                className="w-full h-72 md:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <span className="inline-block w-fit bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Company Retreat
              </span>

              <div className="border p-3">
                <ButtonGroup
                  variant="outlined"
                  aria-label="Basic button group"
                >
                  <Button variant="contained">One</Button>
                  <Button>Two</Button>
                  <Button loading loadingPosition="" startIcon={<HomeMini />}>Three</Button>
                </ButtonGroup>
              </div>
              <Checkbox className=""  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>
          <Card
            elevation={0}
            className="
    bg-white/10!
    backdrop-blur-xl
    border
    border-white/20!
    rounded-3xl
    text-white
    // shadow-[0_8px_32px_rgba(31,38,135,0.37)]
    hover:scale-110
  "
          >
            <CardContent>
              <Typography variant="h4" fontWeight="bold">
                👋 This is me
                <IconButton>
                  <FaDeleteLeft />
                </IconButton>
              </Typography>

              <Typography className="mt-4 text-white/80">
                Learning Material UI and exploring its styling capabilities.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
