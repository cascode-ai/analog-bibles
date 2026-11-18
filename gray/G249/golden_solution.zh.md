三个结果都由 $i_\epsilon = i_i - f i_o$ 和诺顿形式的输出推出。

- 增益：输出短路时，$a i_\epsilon$ 全部作为 $i_o$ 流出：$i_o = a i_\epsilon = a(i_i - f i_o)$，因此 $i_o(1+af) = a i_i$，$i_o/i_i = a/(1+af)$。
- 输入阻抗：输入电压为 $v_i = z_i i_\epsilon$（反馈网络不吸取与电压有关的电流）。由增益结果，$i_\epsilon = i_i - f i_o = i_i/(1+af)$，所以 $Z_i = v_i/i_i = z_i/(1+T)$：输入端的并联反馈使输入阻抗降低。
- 输出阻抗：令 $i_i = 0$（输入开路），在输出端口加测试电压 $v$；设 $i$ 为注入放大器输出端的电流，则放大器提供的输出电流为 $i_o = -i$。于是 $i_\epsilon = -f i_o = f i$，$i = v/z_o - a i_\epsilon = v/z_o - a f i$，因此 $i(1+af) = v/z_o$，$Z_o = v/i = z_o(1+T)$：输出端的串联（电流）取样使输出阻抗升高。
