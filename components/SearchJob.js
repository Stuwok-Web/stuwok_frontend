import React from 'react';
import { Button } from 'react-bootstrap';

const SearchJob = () => {
  return (
    <form>
      <div className="form-row">
        <div className="d-flex col-4">
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text" style={{ background: 'white' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#0084F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#0084F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Job title, Keywords or Company"
              style={{ borderLeft: 'none', fontSize: '18px' }}
            />
          </div>
        </div>
        <div className="col-3">
          <select class="form-control" style={{ fontSize: '18px' }}>
            <option selected>Full time</option>
            <option>Part time</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="col-3">
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text" style={{ background: 'white' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#0084F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#0084F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="All Locations"
              style={{ borderLeft: 'none', fontSize: '18px' }}
            />
          </div>
        </div>
        <Button
          style={{ width: '170px', height: '41px' }}
          variant="primary"
          //   className={styles.getstarted}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchJob;
