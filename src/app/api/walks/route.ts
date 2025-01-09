import { NextRequest } from "next/server";
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    
    const { data, error } = await supabase
      .from('2024_walks')
      .select()
      .order('start', {ascending: false})

    return new Response(JSON.stringify({ data}))
}

export async function POST(req: NextRequest) {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    
    const { data, error } = await supabase.from('2024_walks').insert({start: new Date()}).select()

    console.log(data, 'api post')
    return new Response(JSON.stringify({ data }))
}

export async function PUT(req: NextRequest) {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    const {data: walk} = await supabase.from('2024_walks').select().order('start', {ascending: false})
    const endDate = new Date()
    if (walk) {
        console.log('here', walk)
        const difference = endDate.getTime() - new Date(walk[0]?.start).getTime()
        const hourWalkTotal = Math.floor((difference % 86400000) / 3600000);
        const minuteWalkTotal = Math.round(((difference % 86400000) % 3600000) / 60000) + (hourWalkTotal * 60)
        const history = walk[1]?.history_total ? walk[1]?.history_total : 0
        const historyTotal = history + minuteWalkTotal
        const { data, error } = await supabase.from('2024_walks').update({ end: endDate, walk_total: minuteWalkTotal, history_total: historyTotal}).eq('id', walk[0].id).select()
        return new Response(JSON.stringify({ data }))
    } else {
        return new Response(JSON.stringify('There was an error. Please try again.'))
    }
}