import React from 'react';
import { Button } from 'react-bootstrap';
import Search from '../icons/Search';
import Location from '../icons/Location';

const SearchJob = () => {
  return (
    <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text" style={{ background: 'white' }}>
                <Search />
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Job title, keywords or Company"
              style={{ borderLeft: 'none' }}
            />
          </div>
        </div>
        <div class="col-md-2 mb-3">
          <select class="custom-select" required>
            <option selected>
              Full time
            </option>
            <option>Part time</option>
            <option>Internship</option>
          </select>
        </div>
        <div class="col-md-2 mb-3">
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend" >
              <div class="input-group-text" style={{ background: 'white' }}>
                <Location />
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="All Locations"
              style={{ borderLeft: 'none' }}
            />
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <button class="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchJob;
