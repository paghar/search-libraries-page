export const sort = (sort:string) =>{
  switch (sort) {
    case "1":       
      return "stars";  
    case "2":
      return "rank"; 
    case "3":
      return "dependents_count";
    case "4":
      return "latest_release_published_at";
    case "5":
      return "contributions_count";
    case "6":
      return "created_at";  
    default:
      return "stars";
  }
};