<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Equation from '~/components/Equation.vue';
import Section from '~/components/Section.vue';
import SubSection from '~/components/SubSection.vue';
</script>

<template>
    <Header />
    <p>ここでは，さとしんの勉強・研究している領域についての説明や，見つけたもの，作ったものについて説明していく．</p>
    <Section>数学の何をやってるか</Section>
    <p>私は格子理論，格子基底簡約について研究しています．とはいってもなんやねんそれという方もいるかもしれないので，取り敢えず表面的どころか表面にそっと触れている空気くらいの薄っぺらーい所を書いておきます．</p>
    <SubSection>格子って</SubSection>
    <p>
        <Equation :f="'n'" :inline="true" />次元格子とは一次独立なベクトル
        <Equation :f="'\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\in\\mathbb{R}^m'" :inline="true" />の整数係数全体の集合
    </p>
    <Equation
        :f="'L = \\mathcal{L}(\\mathbf{b}_1, \\dots, \\mathbf{b}_n) := \\left\\{\\left. \\sum_{i = 1}^n x_i \\mathbf{b}_i \\in\\mathbb{R}^m \\right| x_i \\in \\mathbb{Z} \\right\\}'"
        :inline="false" />
    <p>を格子という．</p>
    <p>また，
        <Equation :f="'\\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}'" :inline="true" />を基底，基底を並べて作った行列
    </p>
    <Equation
        :f="'\\mathbf{B}:=\\begin{bmatrix}\\mathbf{b}_1\\\\ \\vdots\\\\ \\mathbf{b}_n\\end{bmatrix}\\in\\mathbb{R}^{n\\times m}'"
        :inline="false" />
    <p>を基底行列と呼ぶ．</p>
    <p>基底簡約は，恐ろしく簡単に言えばこの行列
        <Equation :f="'\\mathbf{B}'" :inline="true" />に良い感じの行基本変形を施してできる限り各基底が短く，且つ直交に近くなるようにしましょうというお話です．
    </p>
    <SubSection>基底簡約の例</SubSection>
    <h3>LLL基底簡約</h3>
    <p>これはそこそこ有名</p>
    <p>
        <Equation :f="'n'" :inline="true" />次元格子の基底
        <Equation :f="'\\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}'" :inline="true" />が
        <Equation :f="'\\delta'" :inline="true" />-LLL簡約基底であるとは
    </p>
    <Equation
        :f="'\\left\\{\\begin{aligned}&1\\le{}^\\forall j<{}^\\forall i\\le n: |\\mu_{i, j}|\\le\\frac{1}{2}\\\\ &2\\le{}^\\forall k\\le n:\\|\\mathbf{b}_k^*\\|^2\\ge (\\delta-\\mu_{k, k-1}^2)\\|\\mathbf{b}_{k-1}^*\\|^2\\end{aligned}\\right.'"
        :inline="false" />
    <p>なるときをいう．但し，</p>
    <Equation
        :f="'\\left\\{\\begin{align}\\mathbf{b}_1^*&:=\\mathbf{b}_1\\\\ \\mathbf{b}_i^*&:=\\mathbf{b}_i-\\sum_{j=1}^{i-1}\\mu_{i,j}\\mathbf{b}_j^*\\quad (2\\le i\\le n)\\end{align}\\right.'"
        :inline="false" />
    <p>はGram-Schmidt直交化ベクトル（GSO-ベクトル）である．</p>
    <h3>PotLLL基底簡約</h3>
    <p>これはちょっとマイナー．でも研究ではよく使うので書いておく．</p>
    <p>
        <Equation :f="'n'" :inline="true" />次元格子の基底
        <Equation :f="'\\mathbf{B}:=\\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}'" :inline="true" />が
        <Equation :f="'\\delta'" :inline="true" />-PotLLL簡約基底であるとは
    </p>
    <Equation
        :f="'\\left\\{\\begin{aligned}&1\\le{}^\\forall j<{}^\\forall i\\le n: |\\mu_{i, j}|\\le\\frac{1}{2}\\\\ &1\\le{}^\\forall k<\\ell \\le n: \\delta\\cdot\\mathrm{Pot}(\\mathbf{B})\\le \\rm{Pot}(\\sigma_{\\mathit{k},\\ell}(\\mathbf{B}))\\end{aligned}\\right.'"
        :inline="false" />
    <p>なるときをいう．但し，</p>
    <Equation :f="'\\mathrm{Pot}(\\mathbf{B}):=\\prod_{i=1}^n \\|\\mathbf{b}_i^*\\|^{2(n-i+1)}'" :inline="false" />
    <p>は格子基底のpotentialである．</p>
    <h3>BKZ基底簡約</h3>
    <p>これもそこそこ有名．</p>
    <p>絶対に止まるとか，思っている人もいるらしいがそんなことはない．なぜか知らないが止まったり，あるいはどこかで強制停止させているだけで停止性は証明されていない．</p>
    <p>BKZ基底簡約について説明する前に，一つ記号を定義しておく：</p>
    <p>
        <Equation :f="'n'" :inline="true" />次元格子
        <Equation :f="'L'" :inline="true" />の基底を
        <Equation :f="'\\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}'" :inline="true" />として，各
        <Equation :f="'1\\le i\\le n'" :inline="true" />に対して写像
        <Equation :f="'\\pi_i'" :inline="true" />を
        <Equation :f="'\\mathbb{R}'" :inline="true" />-ベクトル空間
        <Equation :f="'\\langle\\mathbf{b}_1,\\ldots,\\mathbf{b}_{i-1}\\rangle_\\mathbb{R}'" :inline="true" />
        の直交補空間への直交射影とする（但し，
        <Equation :f="'\\pi_1=\\mathrm{id}'" :inline="true" />とする）．
        このとき，任意の
        <Equation :f="'1\\le k\\le \\ell\\le n'" :inline="true" />に対して
        <Equation :f="'(\\ell-k+1)'" :inline="true" />次元格子
        <Equation :f="'\\pi_1=\\mathrm{id}L_{[k,\\ell]}'" :inline="true" />
        を
        <Equation :f="'\\{\\pi_{k}(\\mathbf{b}_k),\\pi_k(\\mathbf{b}_{k+1}),\\ldots,\\pi_k(\\mathbf{b}_\\ell)\\}'"
            :inline="true" />を基底として持つ格子とする．
    </p>
    <p>
        <Equation :f="'n'" :inline="true" />次元格子の基底
        <Equation :f="'\\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}'" :inline="true" />がブロックサイズ
        <Equation :f="'\\beta'" :inline="true" />に対してBKZ簡約されているとは
    </p>
    <Equation
        :f="'\\left\\{\\begin{aligned} &1\\le ^\\forall j<^\\forall i\\le n, |\\mu_{ij}|\\le\\frac{1}{2}\\\\ &1\\le {}^\\forall k\\le n-\\beta+1\\text{に対して，}\\beta\\text{次元格子}L_{[k,k+\\beta-1]}\\text{の基底}\\{\\pi_k(\\mathbf{b}_k),\\pi_k(\\mathbf{b}_{k+1}),\\ldots,\\pi_k(\\mathbf{b}_{k+\\beta-1})\\}\\text{がHKZ簡約されている．}\\end{aligned}\\right.'"
        :inline="false" />
    <p>の二つの条件を満足するときをいう．</p>
    <SubSection>GSAの変化</SubSection>
    <p>GSAは幾何級数仮定（Geometry Series Assumption）の略だが，ここでは簡単に言えばGram-Schmidtベクトルのノルムの対数値のことを言っている．
    </p>
    <p>これは私が勝手に言ってるわけではなく，（論文とかではあまり見かけないが）そこそこ研究室での会話などでは使う言い回しである．</p>
    <p>
        なんで，GSAなんてのがGram-Schmidtベクトルのノルムなんかを表すかと言えば，そもそも幾何級数仮定というのは簡約基底
        <Equation :f="'\\{\\mathbf{b}_1,\\ldots,\\mathbf{b}_n\\}'" :inline="true" />のGram-Schmidtベクトル
        <Equation :f="'\\mathbf{b}_1^*,\\ldots,\\mathbf{b}_n^*'" :inline="true" />について，
    </p>
    <Equation
        :f="'\\begin{aligned}&\\quad\\quad \\quad \\ \\ \\!\\frac{3}{4}\\le{}^\\exists q<1~\\text{s.t.}~1\\le{}^\\forall i\\le n,~\\frac{\\|\\mathbf{b}_i^\\star\\|^2}{\\|\\mathbf{b}_1\\|^2}\\approx q^{i-1}\\\\ &\\left(\\iff \\frac{3}{4}\\le{}^\\exists q<1~\\text{s.t.}~1\\le{}^\\forall i\\le n,~ \\log\\|\\mathbf{b}_i^\\star\\|\\approx(i-1)\\frac{\\log q}{2}+\\log\\|\\mathbf{b}_1\\|\\right)\\end{aligned}'"
        :inline="false" />
    <p>が成立するっぽいというやつなので，それに因んでだと思われる．</p>
    <p>ここでは幾つかのアルゴリズムにおけるGSAの変化を見てみよう．</p>
    <h3>LLLアルゴリズムの場合</h3>
    <video src="/math_graphs/LLL.mp4" loop controls></video>
    <br>
    <h3>DeepLLLアルゴリズムの場合</h3>
    <video src="/math_graphs/DeepLLL.mp4" loop controls></video>
    <br>
    <h3>PotLLLアルゴリズムの場合</h3>
    <video src="/math_graphs/PotLLL.mp4" loop controls></video>
    <br>
    <h3>双対型LLLアルゴリズムの場合</h3>
    <video src="/math_graphs/DualLLL.mp4" loop controls></video>
    <Footer />
</template>
