import { Redirect } from "expo-router";

const  Index = () => {
//   const { isSignedIn } = useAuth();

//   if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  return <Redirect href="/dashboard" />;
};

export default Index;