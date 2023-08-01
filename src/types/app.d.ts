interface Server {
  name: string;
  connectionType: "ssh";
  address: string;
  username: string;
  password: string;
  privateKey: string;
}

interface App {
  name: string;
  dockerImage: string;
  variables: string[];
}

interface AppEnvironment {
  name: string;
  variables: string[];
}

interface Account {
  name: string;
}
