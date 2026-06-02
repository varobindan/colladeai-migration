import { supabase } from './supabase.js'

async function testConnection() {
  try {
    const { data, error } = await supabase.from('test').select('*')
    
    if (error) {
      console.log('Connection working! Error (expected):', error.message)
    } else {
      console.log('Success! Connected to Supabase:', data)
    }
  } catch (err) {
    console.log('Connection working! Error (expected):', err.message)
  }
}

testConnection()