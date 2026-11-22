# 详细步骤 - A398

锁存器的速度由其再生时间常数决定。写出交叉耦合对的节点方程可知，该时间常数等于节点电容除以跨导；电流和尺寸都相同时，两种锁存器只在 $K'$ 上不同，而它进入 $g_m$。

### 第 1 步 — 再生时间常数

设每个输出节点对交流地的电容为 $C$、电阻为 $R$（电流源与器件 $r_{ds}$ 并联），每只晶体管的跨导为 $g_m$。每个节点由栅极接在对侧节点的晶体管驱动：

$$
C\frac{dv_{o1}}{dt}=-g_mv_{o2}-\frac{v_{o1}}R,\qquad
C\frac{dv_{o2}}{dt}=-g_mv_{o1}-\frac{v_{o2}}R .
$$

两式相减，对差分电压 $\Delta v=v_{o1}-v_{o2}$ 得

$$
C\frac{d\Delta v}{dt}=\Bigl(g_m-\frac1R\Bigr)\Delta v
\quad\Rightarrow\quad
\Delta v(t)=\Delta v(0)\,e^{t/\tau_L},\qquad
\tau_L=\frac{C}{g_m-1/R}\approx\frac C{g_m}\quad(g_mR\gg1).
$$

PMOS 锁存器满足同样的方程，因此两种情况下微小的初始不平衡都以 $\tau_L\approx C/g_m$ 指数增长，达到给定输出差所需的时间为 $\tau_L\ln[\Delta v_{\text{final}}/\Delta v(0)]$。

### 第 2 步 — 比较跨导

饱和区中 $g_m=\sqrt{2K'(W/L)I_D}$。$W/L$ 与偏置电流都相同时，

$$
\frac{g_{m,N}}{g_{m,P}}=\sqrt{\frac{K'_N}{K'_P}}=\sqrt{\frac{110\ \mu\mathrm{A/V^2}}{50\ \mu\mathrm{A/V^2}}}=1.48 .
$$

节点电容基本相同，因为它们由尺寸相同的器件（以及相同的电流源）的栅电容和结电容构成。

### 第 3 步 — 结论

$$
\frac{\tau_{L,P}}{\tau_{L,N}}=\frac{g_{m,N}}{g_{m,P}}\approx1.48,
$$

所以 NMOS 锁存器 (a) 更快：其再生时间常数约短 1.5 倍。原因是电子迁移率高于空穴，使 n 沟道器件的 $K'$ 更大，从而在相同电流和尺寸下 $g_m$ 更大。它的环路增益 $g_mR$ 也更大，使近似 $\tau_L\approx C/g_m$ 更加准确。
