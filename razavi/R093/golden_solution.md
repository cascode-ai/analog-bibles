# Golden Solution - R093

## Reference answer

Let
\[
x=V_{in}-0.7\ \mathrm V,\qquad v=V_{out},\qquad b=2.2\ \mathrm V-V_b .
\]
Here \(x\) is the NMOS overdrive when \(M_1\) is on, and \(b=V_{SG2}-|V_{THP}|\) is the PMOS overdrive. Define the total current supplied into the output node by the load as
\[
J(v)=\frac{V_{DD}-v}{R_D}+I_{D2}(v).
\]
KCL is \(I_{D1}=J(v)\).

For \(x\le 0\), \(M_1\) is off. Since both load currents are nonnegative, KCL gives \(v=V_{DD}=3\ \mathrm V\).

For \(b\le0\), \(M_2\) is off over the sweep, so \(I_{D2}=0\). For \(b>0\), \(V_{SD2}=V_{DD}-v\). The PMOS boundary is \(V_{SD2}=b\), hence
\[
v_P=V_{DD}-b=V_b+0.8\ \mathrm V.
\]
The PMOS current is therefore
\[
I_{D2}(v)=
\begin{cases}
\beta_2\!\left[b(V_{DD}-v)-\dfrac{(V_{DD}-v)^2}{2}\right],
& v>v_P\quad\text{(triode)},\\[6pt]
\dfrac12\beta_2b^2,
& v\le v_P\quad\text{(saturation)}.
\end{cases}
\]
The two expressions agree at \(v=v_P\). In the triode part \(M_2\) behaves as a small resistor, so the initial output fall is gentle. In the saturated part it contributes the constant current \(I_2=\beta_2b^2/2\).

When \(M_1\) is saturated, \(v\ge x>0\), and
\[
I_{D1}=\frac12\beta_1x^2,\qquad
\frac12\beta_1x^2=J(v).
\]
Thus the output is obtained by solving this equation with the appropriate PMOS branch. When \(M_1\) enters triode, \(0<v<x\), and the equation becomes
\[
\beta_1\!\left(xv-\frac{v^2}{2}\right)=J(v).
\]
These equations show why the curve is initially gentle, becomes steep after \(M_2\) saturates, and flattens when \(M_1\) enters triode. With \(\lambda=0\), the saturated-\(M_2\), saturated-\(M_1\) slope is approximately \(-g_{m1}R_D\).

The transition points are found by substituting the boundary condition into the same KCL.

- \(M_1\) turns on at \(V_{in}=0.7\ \mathrm V\).
- \(M_2\) saturation is reached at \(v=v_P\). If \(M_1\) is still saturated there,
  \[
  x_P=\sqrt{\frac{2J(v_P)}{\beta_1}},\qquad V_{in,P}=0.7+x_P.
  \]
  If this trial gives \(x_P>v_P\), \(M_1\) is already in triode and instead
  \[
  x_P=\frac{v_P}{2}+\frac{J(v_P)}{\beta_1v_P}.
  \]
- \(M_1\) triode entry is found from \(v=x\). If \(M_2\) is saturated at that point,
  \[
  \frac12\beta_1x_T^2=\frac{3-x_T}{R_D}+I_2,\qquad
  V_{in,T}=0.7+x_T.
  \]

Only boundaries inside \(0\le V_{in}\le3\ \mathrm V\) are retained. Their order depends on \(V_b\), \(R_D\), \(\beta_1\), and \(\beta_2\). If \(V_b\ge2.2\ \mathrm V\), \(M_2\) is off and the circuit reduces to a resistively loaded common-source stage.

![R093 output transfer characteristic](/q/R093/solution-vout.svg)

## Grading notes

- +2 for a correct KCL-based derivation, \(V_{out}=V_{DD}\) up to \(V_{in}=0.7\ \mathrm V\), the PMOS triode-to-saturation boundary \(V_{out}=V_b+0.8\ \mathrm V\), NMOS triode entry at \(V_{out}=V_{in}-0.7\ \mathrm V\), and the corresponding inverting curve. Equivalent symbolic rearrangements and numerical values within rounding are accepted.
- +1 for the correct overall curve with one transition condition missing or one region mislabeled.
- 0 for a correct inverting shape with transition points unsupported or omitted.
- −2 for asserting a non-inverting characteristic, \(V_{out}<V_{DD}\) while \(M_1\) is off, or treating \(M_2\) as an NMOS or as the input device.

