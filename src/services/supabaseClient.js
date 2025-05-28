import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient("https://ngcsmrybmmuqqixaxiff.supabase.co",
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nY3NtcnlibW11cXFpeGF4aWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzODE4NDgsImV4cCI6MjA2Mzk1Nzg0OH0.2Pk-iGjqYTg-rcVqxWxDCoPga7cbzwg3vAPg3YrZPHo')

export default supabase
