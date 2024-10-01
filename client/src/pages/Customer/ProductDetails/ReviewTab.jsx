import {
  Avatar,
  Box,
  Button,
  Divider,
  LinearProgress,
  linearProgressClasses,
  Rating,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewTag from "../../../components/ReviewTag";
import ReviewForm from "../../../components/ReviewForm";
import { useSelector } from "react-redux";
import NoData from "../../../components/Notify/NoData";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ed6c02",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
export default function ReviewTab({ reviews }) {
  const {
    product: productData,
    loading: productLoading,
    productError: productError,
  } = useSelector((state) => state.product);
  return (
    <Box>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Xếp hạng và đánh giá
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          border: "1px solid grey",
          borderRadius: 4,
          padding: "32px",
        }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "black",
              borderRightWidth: 1,
            }}
          />
        }
        spacing={4}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#ed6c02",
            flex: 0.2,
            textAlign: "center",
            alignContent: "center",
          }}
        >
          4.8
          <StarIcon sx={{ fontSize: 46, paddingBottom: 1 }} color="warning" />
        </Typography>
        <Stack sx={{ flex: 0.5 }} spacing={1}>
          {[5, 4, 3, 2, 1].map((rating) => (
            <Stack key={`rating-${rating}`} direction={"row"} spacing={2}>
              <Typography
                component="span"
                variant="body1"
                color="textSecondary"
                sx={{ fontWeight: 700 }}
              >
                {rating + " sao"}
              </Typography>
              <BorderLinearProgress
                variant="determinate"
                value={rating * 18}
                sx={{
                  display: "grid",
                  flexGrow: 1,
                  placeSelf: "center",
                }}
              />
              <Typography
                component="span"
                variant="body1"
                color="textSecondary"
                sx={{ fontWeight: 700 }}
              >
                {rating}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Box
          sx={{
            flex: 0.3,
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Mua hàng để đánh giá
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ textTransform: "none", px: 4 }}
          >
            Mua sản phẩm này
          </Button>
        </Box>
      </Stack>

      {/* reviews */}
      <Box sx={{ mt: 2 }}>
        <ReviewForm />
      </Box>
      <Divider sx={{ mt: 4 }} />
      {productData.reviews.length === 0 && (
        <NoData
          message={
            "Chưa có đánh giá nào, hãy mua hàng và để lại đánh giá của bạn nhé"
          }
        />
      )}
      {productData.reviews.length > 0 &&
        productData.reviews.map((review, index) => (
          <ReviewTag key={`review-${index}`} review={review} />
        ))}
    </Box>
  );
}