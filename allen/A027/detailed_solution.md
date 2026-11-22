# Detailed solution - A027

With the same gate oxide, $C_{ox}$ is common to both devices, so every difference between them comes from the carrier mobility. Write the transconductance parameter and the speed measures in terms of $\mu$, and take the ratio $\mu_n/\mu_p=2.5$.

### Step 1 — Transconductance parameter

The square-law transconductance parameter is $K'=\mu C_{ox}$. With equal $C_{ox}$,

$$
\frac{K'_N}{K'_P}=\frac{\mu_n}{\mu_p}=\frac{500\ \mathrm{cm^2/(V\,s)}}{200\ \mathrm{cm^2/(V\,s)}}=2.5 .
$$

In saturation $I_D=\tfrac12K'(W/L)V_{ov}^2$ and $g_m=K'(W/L)V_{ov}=\sqrt{2K'(W/L)I_D}$. Consequently:

- for the same $W/L$ and overdrive, the NMOS carries 2.5 times the current and has 2.5 times the $g_m$;
- for the same $W/L$ and current, the NMOS has $\sqrt{2.5}\approx1.58$ times the $g_m$;
- to match the NMOS current or $g_m$ at the same overdrive, the PMOS needs about 2.5 times the width.

### Step 2 — Intrinsic speed

The time a carrier takes to cross the channel is $\tau=L/v$. With drift velocity $v=\mu E$ and an average lateral field $E\approx V_{ov}/L$,

$$
\tau\approx\frac{L^2}{\mu V_{ov}} .
$$

Equivalently, the transition frequency, with $C_{gs}\approx\tfrac23WLC_{ox}$ in saturation, is

$$
f_T=\frac{g_m}{2\pi C_{gs}}=\frac{\mu C_{ox}(W/L)V_{ov}}{2\pi\cdot\tfrac23WLC_{ox}}=\frac{3\mu V_{ov}}{4\pi L^2}.
$$

Both scale directly with mobility, so for equal $L$ and overdrive the NMOS has 2.5 times the $f_T$ and 0.4 times the transit time, i.e. it is about 2.5 times faster.

### Step 3 — Circuit-level consequence

A PMOS sized for the same current or transconductance must be about 2.5 times wider, so it has about 2.5 times the gate and junction capacitance and the area. That extra capacitance loads the nodes it drives or connects to, slowing the circuit further. The n-channel transistor is therefore preferred wherever transconductance or speed matters, and p-channel devices are used where the circuit requires them, such as loads, level shifts and complementary stages.
