# Golden Solution - R543

## Reference answer

For large op-amp gain ($A_0g_{mP} \gg g_{mN}$, $A_0g_{mP}R_1 \gg 1$):
$\overline{V_{n,out}^2} \approx 2\left(\dfrac{1}{g_{mN}}\right)^2\left(1 + \dfrac{1}{g_{mN}R_1}\right)^2\left[4kT\gamma g_{mP} + \dfrac{K_P}{C_{ox}WLf}g_{mP}^2\right]$.
Exact: $V_{n,out} = \dfrac{(1 + g_{mN}R_1)\,[A_0g_{mP}(i_{n1} - i_{n2}) + g_{mN}i_{n2}]}{g_{mN}^2(1 + A_0g_{mP}R_1)}$, so $\overline{V_{n,out}^2} = \left[\dfrac{1 + g_{mN}R_1}{g_{mN}^2(1 + A_0g_{mP}R_1)}\right]^2\left[(A_0g_{mP})^2 + (A_0g_{mP} - g_{mN})^2\right]\overline{i_n^2}$.

Derivation (noise currents $i_{n1}$, $i_{n2}$ injected into $A$ and $B$, uncorrelated):
- $v_A = (-g_{mP}v_P + i_{n1})/g_{mN}$, $v_B = (-g_{mP}v_P + i_{n2})(R_1 + 1/g_{mN})$, $v_P = A_0(v_B - v_A)$.
- For $A_0 \to \infty$ the loop forces $v_A = v_B$. The two branch currents differ by $i_{n1} - i_{n2}$ but must produce equal voltages across $1/g_{mN}$ and $R_1 + 1/g_{mN}$, so the current in branch B is $(i_{n1} - i_{n2})/(g_{mN}R_1)$ and $v_B = (i_{n1} - i_{n2})(1/g_{mN})(1 + 1/(g_{mN}R_1))$.
- The PMOS noise is not suppressed by the loop gain. In a real core $g_{mN}R_1 = \ln n$ and $1/g_{mN} = V_T/I$, so $\overline{V_{n,out}^2} = 2(V_T/I)^2(1 + 1/\ln n)^2\,\overline{i_n^2}$; the flicker term dominates at low frequency.

## Grading notes

+2: large-gain transfer $V_{n,out} = (i_{n1} - i_{n2})(1/g_{mN})(1 + 1/(g_{mN}R_1))$ or the exact finite-$A_0$ form (equivalent forms accepted), contributions of $M_1$ and $M_2$ added in power (factor 2), thermal and flicker terms both included. +1: correct structure with one slip (factor 2 missing, or the $(1 + 1/(g_{mN}R_1))$ factor dropped). 0: correct node equations with an algebra error in the final transfer. -2 (asserted as fact): PMOS noise claimed to be suppressed by the loop gain (vanishing as $A_0 \to \infty$), the two noise currents claimed to cancel because the devices are identical, or the noise referred with the wrong device transconductance (e.g., $g_{mN}$ in the PMOS noise current).
