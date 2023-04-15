import { Container, Skeleton } from "@mui/material";

const PokeSkeleton = () => {
    
    return (
        <Container display="flex" width="100%" >
        <Skeleton variant="rounded" width="100%" height={90} sx={{ m: 2 }} />
        <Skeleton variant="rounded" width="100%" height={90} sx={{ m: 2 }} />
        <Skeleton variant="rounded" width="100%" height={90} sx={{ m: 2 }} />
        <Skeleton variant="rounded" width="100%" height={90} sx={{ m: 2 }} />
        <Skeleton variant="rounded" width="100%" height={90} sx={{ m: 2 }} />
        </Container>
    );
}

export default PokeSkeleton;