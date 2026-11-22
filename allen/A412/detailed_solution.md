# Detailed solution - A412

Write the total delay as a function of the enabling level and minimize it. Enabling early leaves the latch a small imbalance and a long regeneration; enabling late makes the amplifier crawl toward its final value. The optimum balances the two marginal costs. Voltages are normalized to $V_{OH}-V_{OL}$, with $x=\Delta V_i/(V_{OH}-V_{OL})$, and times to $\tau_L$.

### Step 1 — Total delay as a function of $x$

The single-pole amplifier (gain 5, pole $1/\tau_L$) driven by a step of 0.05 gives $v_{amp}=0.25(1-e^{-t/\tau_L})$, so it reaches $x$ at

$$
t_1=-\tau_L\ln(1-4x).
$$

The latch then needs $t_2=\tau_L\ln(0.5/x)$. Hence, for $0<x<0.25$,

$$
\frac{t_p}{\tau_L}=-\ln(1-4x)+\ln\frac{0.5}x=\ln\frac{0.5}{x(1-4x)} .
$$

### Step 2 — Minimize

$$
\frac{d}{dx}\left(\frac{t_p}{\tau_L}\right)=\frac4{1-4x}-\frac1x=0
\quad\Rightarrow\quad
4x=1-4x
\quad\Rightarrow\quad
x=\frac18=0.125 .
$$

The second derivative, $16/(1-4x)^2+1/x^2$, is positive, so this is a minimum. Equivalently, $x(1-4x)$ is a downward parabola with its peak at $x=1/8$, halfway between its zeros at 0 and 0.25.

### Step 3 — Minimum delay

At $x=0.125$ the amplifier has reached half its final output:

$$
t_1=-\tau_L\ln0.5=0.693\,\tau_L,\qquad t_2=\tau_L\ln4=1.386\,\tau_L,
\qquad t_p(\min)=\tau_L\ln8=2.08\,\tau_L .
$$

![Normalized delay versus enabling level, with the four given points and the minimum at x = 0.125](/q/A412/solution-curves.svg)

The curve is symmetric about $x=0.125$ in the sense that $x$ and $0.25-x$ give the same delay, which is why the given values pair up (2.53 at 0.05 and 0.2, 2.12 at 0.1 and 0.15). So the optimum is to enable the latch when the preamplifier output reaches $\Delta V_i=0.125(V_{OH}-V_{OL})$, half of its final value, giving a propagation delay of $2.08\,\tau_L$.
