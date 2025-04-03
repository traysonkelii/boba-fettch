import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { BobaShopsResponse, Office, SortOption } from '../types';

@Injectable()
export class YelpService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://api.yelp.com/v3/businesses/search';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('YELP_API_KEY');
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  async searchBobaShops(
    location: string,
    sortBy: SortOption,
    offset: number = 0,
    limit: number = 20,
    radius: number = 10000, // 10,000 meters = ~6 miles
  ): Promise<BobaShopsResponse> {
    try {
      const office = this.getOfficeByLocation(location);
      const response = await axios.get(
        'https://api.yelp.com/v3/businesses/search',
        {
          headers: this.getHeaders(),
          params: {
            term: 'boba',
            latitude: office.coordinates.latitude,
            longitude: office.coordinates.longitude,
            radius,
            sort_by: sortBy,
            limit,
            offset,
          },
        },
      );

      return {
        businesses: response.data.businesses,
        total: response.data.total,
        office,
      };
    } catch (error) {
      throw new Error(`Failed to fetch boba shops: ${error}`);
    }
  }

  private getOfficeByLocation(location: string): Office {
    const offices = this.getOffices();
    const office = offices.find((o) => o.name === location);
    if (!office) {
      throw new Error(`Office not found: ${location}`);
    }
    return office;
  }

  getOffices(): Office[] {
    return [
      {
        name: 'Netflix Los Gatos',
        address: '100 Winchester Circle, Los Gatos, CA 95032',
        coordinates: {
          latitude: 37.2537,
          longitude: -121.9584,
        },
      },
      {
        name: 'Netflix Los Angeles',
        address: '5808 Sunset Blvd, Los Angeles, CA 90028',
        coordinates: {
          latitude: 34.0979,
          longitude: -118.3216,
        },
      },
      {
        name: 'Netflix New York',
        address: '888 Broadway, New York, NY 10003',
        coordinates: {
          latitude: 40.7336,
          longitude: -73.9897,
        },
      },
    ];
  }
}
