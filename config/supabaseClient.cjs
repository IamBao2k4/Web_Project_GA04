const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://hrrwodexesxgushgnrtg.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycndvZGV4ZXN4Z3VzaGducnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4OTUwMjgsImV4cCI6MjA0NjQ3MTAyOH0.FCjlQYYZcJefT3pO4tSupH3vxyfG86ydVK06jowijwk'

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;