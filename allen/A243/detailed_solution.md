# Detailed solution - A243

Write the output of the ideal op amp with the controlled source in its inverting-input path, then compare the result with the definition $V_{out}=A_v(V_1-V_2)\pm A_c(V_1+V_2)/2$ for purely common-mode, purely differential and general inputs.

### Step 1 — Output with the controlled source

With the other nonidealities ignored, the + input of the ideal op amp is at $v_1$. The source $v_1/\mathrm{CMRR}$ has its + terminal at $v_2$ and its − terminal toward the op amp, so the − input is at $v_2-v_1/\mathrm{CMRR}$. Hence

$$
v_{out}=A_v\Big[v_1-\Big(v_2-\frac{v_1}{\mathrm{CMRR}}\Big)\Big]
=A_v(v_1-v_2)+\frac{A_v}{\mathrm{CMRR}}\,v_1
=A_v(v_1-v_2)+A_cv_1,
$$

using $\mathrm{CMRR}=A_v/A_c$.

### Step 2 — Pure common-mode input

With $v_1=v_2=v_{cm}$ the differential term vanishes:

$$
v_{out}=\frac{A_v}{\mathrm{CMRR}}v_{cm}=A_cv_{cm},
$$

exactly the common-mode output required by the definition, since $(v_1+v_2)/2=v_{cm}$. The ± of the definition corresponds to the sign of CMRR, i.e. to the polarity of the source.

### Step 3 — Differential and general inputs

With $v_1=-v_2=v_{id}/2$:

$$
v_{out}=A_vv_{id}+A_c\frac{v_{id}}{2}=A_vv_{id}\Big(1+\frac{1}{2\,\mathrm{CMRR}}\Big)\approx A_vv_{id},
$$

because $\mathrm{CMRR}\gg1$. For a general input $v_1=v_{cm}+v_{id}/2$, $v_2=v_{cm}-v_{id}/2$:

$$
v_{out}=A_vv_{id}+A_cv_{cm}+A_c\frac{v_{id}}{2}\approx A_vv_{id}+A_cv_{cm}.
$$

The only discrepancy from the definition is the term $A_cv_{id}/2$, a fraction $1/(2\,\mathrm{CMRR})$ of the differential output, which is negligible.

### Step 4 — Conclusion

The single source $v_1/\mathrm{CMRR}$ reproduces the common-mode output $A_cv_{cm}$ exactly and leaves the differential gain essentially unchanged, so it is a suitable model of the op amp's common-mode behavior. Driving the source from $(v_1+v_2)/2$ instead of $v_1$ would make it exact; driving it from $v_1$ is accurate because CMRR is large.
