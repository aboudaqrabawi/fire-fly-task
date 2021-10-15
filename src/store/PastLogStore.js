import { Store } from "pullstate";

const PastLogStore = new Store({
	
	
	saved: []
});

export default PastLogStore;

export const addPastLogs = id => {

    PastLogStore.update(s => { s.saved = [ ...s.saved, id ] });
}

// export const removeSavedQuote = id => {

// 	PastLogStore.update(s => { s.saved = s.saved.filter(savedId => parseInt(savedId) !== parseInt(id)) });
// }

