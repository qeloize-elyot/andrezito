"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Home() {
 const [count,setCount]=useState<number|null>(null);
 useEffect(()=>{ if(supabase) supabase.from("letters").select("id",{count:"exact",head:true}).then(({count})=>setCount(count??0)); },[]);
 return <main>
  <nav className="nav wrap"><Link href="/" className="wordmark">A<span>.</span></Link><div className="nav-links"><Link href="/cartas">O mural</Link><Link href="/escrever" className="nav-cta">Escrever uma carta ↗</Link></div></nav>
  <section className="hero wrap"><div className="hero-copy"><p className="eyebrow">UMA HOMENAGEM COLETIVA · 2026</p><h1>André,<br/><em>em palavras.</em></h1><p className="intro">Algumas pessoas passam pela nossa história. Outras ajudam a escrevê-la. Este espaço reúne palavras de quem teve a oportunidade de aprender com você.</p><div className="hero-actions"><Link href="/escrever" className="button button-dark">Deixar minha carta ↗</Link><Link href="/cartas" className="text-link">Ler as cartas →</Link></div><div className="hero-foot"><span className="rule"/><span>{count===null?"Cartas reunidas aqui":count+" "+(count===1?"carta recebida":"cartas recebidas")}</span></div></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" alt="Sala de aula iluminada"/></div></section>
  <section className="manifesto"><div className="wrap manifesto-inner"><p className="eyebrow">UM ESPAÇO PARA LEMBRAR</p><p className="manifesto-text">Uma aula termina.<br/><em>O que fica, não.</em></p><div className="manifesto-bottom"><p>Um mural feito de lembranças, aprendizados e agradecimentos. Cada carta é uma maneira de registrar o que, às vezes, não cabe no fim da aula.</p><Link href="/cartas" className="text-link">Conhecer o mural ↗</Link></div></div></section>
  <section className="closing wrap"><div><p className="eyebrow">A SUA VEZ</p><h2>Tem alguma coisa<br/>para dizer ao André?</h2></div><Link href="/escrever" className="button button-outline">Escrever uma carta ↗</Link></section>
  <footer className="footer wrap"><span>ANDRÉ, EM PALAVRAS.</span><span>Feito coletivamente, com cuidado.</span><span>2026</span></footer>
 </main>;
}