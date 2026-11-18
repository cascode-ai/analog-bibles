按图中所画的受控源，理想运放反相输入端的电压为 $v_2 - v_1/\mathrm{CMRR}$，因此

$v_{out} = A_v\left[v_1 - \left(v_2 - \dfrac{v_1}{\mathrm{CMRR}}\right)\right] = A_v(v_1 - v_2) + \dfrac{A_v}{\mathrm{CMRR}}v_1 = A_v(v_1 - v_2) + A_c v_1$。

- 纯共模输入 $v_1 = v_2 = v_{cm}$：$v_{out} = A_v v_{cm}/\mathrm{CMRR} = A_c v_{cm}$，恰好是定义所要求的共模输出。
- 纯差模输入 $v_1 = -v_2 = v_{id}/2$：$v_{out} = A_v v_{id} + A_c v_{id}/2 = A_v v_{id}(1 + 1/(2\,\mathrm{CMRR})) \approx A_v v_{id}$，因为 $\mathrm{CMRR} \gg 1$。
- 一般输入 $v_1 = v_{cm} + v_{id}/2$：$v_{out} = A_v v_{id} + A_c v_{cm} + A_c v_{id}/2 \approx A_v v_{id} + A_c v_{cm}$；误差项 $A_c v_{id}/2$ 只占差模输出的 $1/(2\,\mathrm{CMRR})$，可以忽略。

因此单个受控源 $v_1/\mathrm{CMRR}$ 能够再现共模输出（定义中的 ± 由 CMRR 的符号，即受控源的极性来体现）。若改用 $(v_1 + v_2)/2$ 而不是 $v_1$ 来控制它，该模型就是精确的；由于 CMRR 很大，用 $v_1$ 控制已是很好的近似。
