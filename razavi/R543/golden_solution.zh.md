当运放增益很大时（$A_0g_{mP} \gg g_{mN}$，$A_0g_{mP}R_1 \gg 1$）：
$\overline{V_{n,out}^2} \approx 2\left(\dfrac{1}{g_{mN}}\right)^2\left(1 + \dfrac{1}{g_{mN}R_1}\right)^2\left[4kT\gamma g_{mP} + \dfrac{K_P}{C_{ox}WLf}g_{mP}^2\right]$。
精确结果：$V_{n,out} = \dfrac{(1 + g_{mN}R_1)\,[A_0g_{mP}(i_{n1} - i_{n2}) + g_{mN}i_{n2}]}{g_{mN}^2(1 + A_0g_{mP}R_1)}$，因此 $\overline{V_{n,out}^2} = \left[\dfrac{1 + g_{mN}R_1}{g_{mN}^2(1 + A_0g_{mP}R_1)}\right]^2\left[(A_0g_{mP})^2 + (A_0g_{mP} - g_{mN})^2\right]\overline{i_n^2}$。

推导（噪声电流 $i_{n1}$、$i_{n2}$ 分别注入 $A$ 和 $B$，互不相关）：
- $v_A = (-g_{mP}v_P + i_{n1})/g_{mN}$，$v_B = (-g_{mP}v_P + i_{n2})(R_1 + 1/g_{mN})$，$v_P = A_0(v_B - v_A)$。
- 当 $A_0 \to \infty$ 时，环路强制 $v_A = v_B$。两条支路的电流相差 $i_{n1} - i_{n2}$，但必须在 $1/g_{mN}$ 和 $R_1 + 1/g_{mN}$ 上产生相等的电压，因此支路 B 中的电流为 $(i_{n1} - i_{n2})/(g_{mN}R_1)$，$v_B = (i_{n1} - i_{n2})(1/g_{mN})(1 + 1/(g_{mN}R_1))$。
- PMOS 噪声不会被环路增益（loop gain）抑制。在实际的核心电路中，$g_{mN}R_1 = \ln n$，$1/g_{mN} = V_T/I$，因此 $\overline{V_{n,out}^2} = 2(V_T/I)^2(1 + 1/\ln n)^2\,\overline{i_n^2}$；在低频时闪烁噪声项占主导。
