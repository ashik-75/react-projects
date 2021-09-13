import axios from 'axios';

async function loadData(keyword, page, per_page) {
  const access_id = 'zcUGsCgU-xujL0JhrLZCVAsRfBi-MYbxZRHsvJL4egY';
  const { data } = await axios({
    method: 'get',
    url: `https://api.unsplash.com/search/photos/?query=${
      keyword ? keyword.split(' ').join('-') : 'feature'
    }&page=${page}&per_page=${per_page}&client_id=${access_id}`,
  });

  return data.results;
}

export default loadData;
