import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = () => {
  return (
    <TouchableOpacity style={styles.container} >
      <TouchableOpacity style={styles.logoContainer}>
        
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          Friend
        </Text>

        <Text style={styles.jobType}>Friend</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;