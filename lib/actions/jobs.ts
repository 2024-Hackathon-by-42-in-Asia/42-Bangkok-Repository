import axios from 'axios';
import { Job } from '@/lib/types/job';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
  });
  

export async function list() : Promise<Job[]> {
    const table = 'jobs.json';
    const res = await instance.get(table);
    return res.data;
}

export async function create(data: Job){
    const table = `jobs.json`;
    const res = await instance.post(table, data);
    return res.data;
}

export async function put(data: Job){
    const { batchId } = data;
    const table = `jobs/${batchId}.json`;
    const res = await instance.put(table, data);
    return res.data;
}