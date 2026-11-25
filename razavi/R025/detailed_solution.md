# Detailed solution - R025

**Approach:** The capacitor starts at the drain-supply voltage.

### Zero drain-source voltage

At $t=0$ both channel terminals are at $3\,\mathrm{V}$, so $V_{DS}=0$. Cutoff gives zero current; a formed channel also gives $I_D=\beta[(V_{GS}-V_{TH})V_{DS}-V_{DS}^2/2]=0$. KCL therefore gives $C_1\dot V_X=0$ and $V_X(t)=3\,\mathrm{V}$, $I_X(t)=0\,\mathrm{A}$.

### Scope

The plots use normalized time t/τ because $C_1$, $V_b$ and device size are unspecified. Leakage and parasitics are outside the ideal model.

![Answer plot: voltage](/q/R025/solution-voltage.svg)

![Answer plot: current](/q/R025/solution-current.svg)

